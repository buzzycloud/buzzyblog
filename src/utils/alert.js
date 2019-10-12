import Swal from "sweetalert2/dist/sweetalert2.js";
import "sweetalert2/src/sweetalert2.scss";
import { ALERT_OPTS } from "./consts";

export const fire = async ({ type, msg, submsg = "Please try again!" }) => {
    await Swal.fire({
        position: ALERT_OPTS.POSITION,
        type: type,
        titleText: msg,
        text: submsg,
        showConfirmButton: false,
        allowOutsideClick: false,
        allowEscapeKey: false,
        timer: ALERT_OPTS.TIMER,
    });
};
