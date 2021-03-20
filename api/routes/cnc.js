const express = require('express');
const router = express.Router();

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

/****************************************************/
//                    G E T                         //
/****************************************************/

router.get('/', (req, res, next) => {
    res.status(200).json({
        message: 'Handling GET requests to /cnc'
    });
});

/**
 * @swagger
 *
 * /cnc/status:
 *   get:
 *     tags:
 *       - CNC
 *     description: 取得CNC狀態
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: OK
 */
router.get('/status', (req, res, next) => {
    res.status(200).json(m_cncStatus);
});

/**
 * @swagger
 *
 * /cnc/mode:
 *   get:
 *     tags:
 *       - CNC
 *     description: 取得CNC模式
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: OK
 */
router.get('/mode', (req, res, next) => {
    res.status(200).json(m_cncMode);
});

/**
 * @swagger
 *
 * /cnc/fname:
 *   get:
 *     tags:
 *       - CNC
 *     description: 取得CNC目前加工程式名稱
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: OK
 */
 router.get('/fname', (req, res, next) => {
    res.status(200).json(m_fname);
});

/****************************************************/
//                    P O S T                       //
/****************************************************/

/**
 * @swagger
 *
 * /cnc/fname:
 *   post:
 *     tags:
 *       - CNC
 *     description: 設定加工程式名稱
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: fname
 *         description: 加工程式名稱
 *         in: formData
 *         required: true
 *         type: string
 *     responses:
 *       201:
 *         description: OK
 */
router.post('/fname', (req, res, next) => {
    const fname = {
        fname: req.body.fname
    };

    m_fname = fname;

    res.status(201).json({
        message: 'Handling POST requests to /pokedc/status',
        createdStatus: fname
    });
});

module.exports = router;