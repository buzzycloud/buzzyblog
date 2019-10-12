import Swal from "sweetalert2/dist/sweetalert2.js";
import "sweetalert2/src/sweetalert2.scss";

export const fireAlert = async ({ type, msg, submsg = "Please try again!" }) => {
    Swal.fire({
        position: "top",
        type: type,
        titleText: msg,
        text: submsg,
        showConfirmButton: false,
        allowOutsideClick: false,
        allowEscapeKey: false,
        timer: 2000,
    });
};
