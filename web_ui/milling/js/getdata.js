let m_url_hserver = "http://" + location.host.split(':')[0] + ":3338";
let m_settings = {
        "url": m_url_hserver + "",
        "method": "GET",
        "dataType": "json",
        "contentType": "application/x-www-form-urlencoded"
    };
$(document).ready(() => {
    refreshData_basic();
    refreshData_basic2();
    refreshData_pos();
    setInterval(() => { refreshData_basic(); }, 10 * 1000); // 10 secs
    setInterval(() => { refreshData_basic2(); }, 2 * 1000); // 2 secs
    setInterval(() => { refreshData_pos(); }, 500); // 0.5 secs
});

function refreshData_basic() {
    let cnc_status_setting = $.extend(true, {}, m_settings);
    cnc_status_setting.url += "/api/milling/status";
    let cnc_mode_setting = $.extend(true, {}, m_settings);
    cnc_mode_setting.url += "/api/milling/mode";
    let cnc_fname_setting = $.extend(true, {}, m_settings);
    cnc_fname_setting.url += "/api/milling/fname";

    let request;
    request = $.ajax(cnc_status_setting);
    request.done((response) => {
        $("#cnc-status").text("Status：" + response.status);
    });
    request = $.ajax(cnc_mode_setting);
    request.done((response) => {
        $("#cnc-mode").text("Mode：" + response.mode);
    });
    request = $.ajax(cnc_fname_setting);
    request.done((response) => {
        $("#cnc-fname").text("File Name：" + response.fname);
    });

    $("#cnc-status").removeClass("alert-danger").addClass("alert-success");

    request.fail((XMLHttpRequest, textStatus, errorThrown) => {
        $("#cnc-status").removeClass("alert-success").addClass("alert-danger");
        $("#cnc-status").text("Status：NOT READY");
        $("#cnc-mode").text("Mode：???");
        $("#cnc-fname").text("File Name：O????.nc");
        debug_console(XMLHttpRequest, textStatus, errorThrown);
    });
}

function refreshData_basic2() {
    let cnc_feedrate_setting = $.extend(true, {}, m_settings);
    cnc_feedrate_setting.url += "/api/milling/feedrate";
    let cnc_spdspeed_setting = $.extend(true, {}, m_settings);
    cnc_spdspeed_setting.url += "/api/milling/spindlespeed";

    let request;
    request = $.ajax(cnc_feedrate_setting);
    request.done((response) => {
        $("#cnc-feedrate").text("Feedrate：" + parseInt(response.current.value) / 1000 + " mm/min");
    });
    request = $.ajax(cnc_spdspeed_setting);
    request.done((response) => {
        $("#cnc-spdspeed").text("Spindle Speed：" + response.current.value + " RPM");
    });

    request.fail((XMLHttpRequest, textStatus, errorThrown) => {
        $("#cnc-feedrate").text("Feedrate：????? mm/min");
        $("#cnc-spdspeed").text("Spindle Speed：????? RPM");
        debug_console(XMLHttpRequest, textStatus, errorThrown);
    });
}

function refreshData_pos() {
    let cnc_pos_setting = $.extend(true, {}, m_settings);
    cnc_pos_setting.url += "/api/milling/pos";

    let request;
    request = $.ajax(cnc_pos_setting);
    request.done((response) => {
        $("#pos-x-abs").text(response.abs.x);
        $("#pos-x-rel").text(response.rel.x);
        $("#pos-x-mach").text(response.mach.x);
        $("#pos-y-abs").text(response.abs.y);
        $("#pos-y-rel").text(response.rel.y);
        $("#pos-y-mach").text(response.mach.y);
        $("#pos-z-abs").text(response.abs.z);
        $("#pos-z-rel").text(response.rel.z);
        $("#pos-z-mach").text(response.mach.z);
        $("#pos-a-abs").text(response.abs.a);
        $("#pos-a-rel").text(response.rel.a);
        $("#pos-a-mach").text(response.mach.a);
        $("#pos-b-abs").text(response.abs.b);
        $("#pos-b-rel").text(response.rel.b);
        $("#pos-b-mach").text(response.mach.b);
        $("#pos-c-abs").text(response.abs.c);
        $("#pos-c-rel").text(response.rel.c);
        $("#pos-c-mach").text(response.mach.c);
    });

    request.fail((XMLHttpRequest, textStatus, errorThrown) => {
        $("#pos-x-abs").text("????????");
        $("#pos-x-rel").text("????????");
        $("#pos-x-mach").text("????????");
        $("#pos-y-abs").text("????????");
        $("#pos-y-rel").text("????????");
        $("#pos-y-mach").text("????????");
        $("#pos-z-abs").text("????????");
        $("#pos-z-rel").text("????????");
        $("#pos-z-mach").text("????????");
        $("#pos-a-abs").text("????????");
        $("#pos-a-rel").text("????????");
        $("#pos-a-mach").text("????????");
        $("#pos-b-abs").text("????????");
        $("#pos-b-rel").text("????????");
        $("#pos-b-mach").text("????????");
        $("#pos-c-abs").text("????????");
        $("#pos-c-rel").text("????????");
        $("#pos-c-mach").text("????????");
        debug_console(XMLHttpRequest, textStatus, errorThrown);
    });
}

function debug_console(XMLHttpRequest, textStatus, errorThrown) {
    console.log("XMLHttpRequest.status:" + XMLHttpRequest.status);
    console.log("XMLHttpRequest.readyState:" + XMLHttpRequest.readyState);
    console.log("textStatus:" + textStatus);
}