const express = require('express');
const router = express.Router();
const basic_f = require('../../lib/basic_f.js');

let m_cncStatus = {
    isOnline: true,
    status: 'READY'
};

let m_cncMode = {
    mode: 'MEM'
}

let m_fname = {
    fname: 'O0001.nc'
};

let m_pos = {
    abs: { x: 0, y: 0, z: 0, a: 0, b: 0, c: 0 },
    rel: { x: 0, y: 0, z: 0, a: 0, b: 0, c: 0 },
    mach: { x: 0, y: 0, z: 0, a: 0, b: 0, c: 0}
};

let m_feedrate = {
    current: {
        value: 1000000
    },
    cmd: {
        value: 1000000,
        percent: 100
    }    
};

let m_spindleSpeed = {
    current: {
        value: 10000
    },
    cmd: {
        value: 10000,
        percent: 100
    }
};

/****************************************************/
//                    G E T                         //
/****************************************************/

router.get('/', (req, res, next) => {
    res.status(200).json({
        message: 'Handling GET requests to /api/milling'
    });
});

router.get('/status', (req, res, next) => {
    res.status(200).json(m_cncStatus);
});

router.get('/mode', (req, res, next) => {
    res.status(200).json(m_cncMode);
});

 router.get('/fname', (req, res, next) => {
    res.status(200).json(m_fname);
});

 router.get('/pos', (req, res, next) => {
    res.status(200).json(m_pos);
});

 router.get('/feedrate', (req, res, next) => {
    res.status(200).json(m_feedrate);
});

 router.get('/spindleSpeed', (req, res, next) => {
    res.status(200).json(m_spindleSpeed);
});

/****************************************************/
//                    P O S T                       //
/****************************************************/

router.post('/fname', (req, res, next) => {
    const fname = {
        fname: req.body.fname
    };

    m_fname = fname;

    res.status(201).json({
        message: 'Handling POST requests to /api/milling/fname',
        createdStatus: fname
    });
});

/****************************************************/
//                    Reflash LOOP                  //
/****************************************************/
setInterval(() => {
    m_pos.abs.x = basic_f.getRandom(-10000000, 10000000);
    m_pos.abs.y = basic_f.getRandom(-10000000, 10000000);
    m_pos.abs.z = basic_f.getRandom(-10000000, 10000000);
    m_pos.abs.a = basic_f.getRandom(-10000000, 10000000);
    m_pos.abs.b = basic_f.getRandom(-10000000, 10000000);
    m_pos.abs.c = basic_f.getRandom(-10000000, 10000000);

    m_pos.rel.x = basic_f.getRandom(-10000000, 10000000);
    m_pos.rel.y = basic_f.getRandom(-10000000, 10000000);
    m_pos.rel.z = basic_f.getRandom(-10000000, 10000000);
    m_pos.rel.a = basic_f.getRandom(-10000000, 10000000);
    m_pos.rel.b = basic_f.getRandom(-10000000, 10000000);
    m_pos.rel.c = basic_f.getRandom(-10000000, 10000000);

    m_pos.mach.x = basic_f.getRandom(-10000000, 10000000);
    m_pos.mach.y = basic_f.getRandom(-10000000, 10000000);
    m_pos.mach.z = basic_f.getRandom(-10000000, 10000000);
    m_pos.mach.a = basic_f.getRandom(-10000000, 10000000);
    m_pos.mach.b = basic_f.getRandom(-10000000, 10000000);
    m_pos.mach.c = basic_f.getRandom(-10000000, 10000000);

    m_spindleSpeed.current.value = parseInt(
        basic_f.getRandom(m_spindleSpeed.cmd.value - m_spindleSpeed.cmd.value * 0.1,
            m_spindleSpeed.cmd.value + m_spindleSpeed.cmd.value * 0.1) * m_spindleSpeed.cmd.percent / 100);
    
    m_feedrate.current.value = parseInt(
        basic_f.getRandom(m_feedrate.cmd.value - m_feedrate.cmd.value * 0.1,
            m_feedrate.cmd.value + m_feedrate.cmd.value * 0.1) * m_spindleSpeed.cmd.percent / 100);
}, 100);    // 100ms

setInterval(() => {
}, 1000);    // 1s

setInterval(() => {
    m_feedrate.cmd.value = basic_f.getRandom(0, 10000000);
    m_feedrate.cmd.percent = basic_f.getRandom(0, 100);

    m_spindleSpeed.cmd.value = basic_f.getRandom(8, 12) * 1000; // 8000-12000 rpm
    m_spindleSpeed.cmd.percent = basic_f.getRandom(0, 100);
}, 10000);    // 10s

module.exports = router;