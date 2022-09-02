export class util {
    radioAtivoToBoolean(statusString) {
        let _status1;
        let _status3 = false;
        for (let i = 0; i < statusString.length; i++) {
            if (statusString[i].checked === true) {
                _status1 = statusString[i].value;
                if (_status1 == "ativo") {
                    _status3 = true;
                }
                else {
                    _status3 = false;
                }
            }
        }
        return _status3;
    }
}
