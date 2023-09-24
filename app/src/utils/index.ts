function isEmailValid(email: string): string {
    const emailRegex =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,3}))$/;
    return email == "" ? "" : emailRegex.test(email) ? "is-valid" : "is-invalid";
}

function isPhoneNumberValid(numero: string): string {
    const numeroRegex = /^((0+([0-9]{9}))|(\+([0-9]{2,3} )+([1-9] )+[0-9]{8}))$/;
    return numero.length === 0 ? "" : numeroRegex.test(numero) ? "is-valid" : "is-invalid";
}

function isPasswordValid(password: string): string {
    const passwordRegex = /^(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/;
    return password.length === 0 ? "" : password.length > 8 && passwordRegex.test(password) ? "is-valid" : "is-invalid";
}

function isNameValid(name: string): string {
    const nameRegex = /^(([a-zA-Z]*))$/;
    return name.length === 0 ? "" : nameRegex.test(name) ? "is-valid" : "is-invalid";
}

function isYearValid(annee: string): string {
    const anneeRegex = /^(19+[0-9]+[0-9]|20+[0-1]+[0-9]|202+[0-2])$/;
    return annee.length === 0 ? "" : annee.length === 4 && anneeRegex.test(annee) ? "is-valid" : "is-invalid";
}

function isDayValid(jour: string): string {
    const jourRegex = /^([1-9]|[1-2]+[0-9]|3+[0-1]|0+[1-9])$/;
    return jour === "" ? "" : jour.length <= 2 && jourRegex.test(jour) ? "is-valid" : "is-invalid";
}

function isMonthValid(mois: string): string {
    return mois === "" ? "" : "is-valid";
}

function isLinkValid(value: string): string {
    const lienRegex = /^((https:\/\/|http:\/\/)+(([a-zA-Z0-9.&=?!-/_]*)[^\s]))$/;
    return value.length === 0 ? "" : lienRegex.test(value) ? "is-valid" : "is-invalid";
}

function isNumberValid(number: string): string {
    const numero = /^([0-9]*)$/;
    return number.length === 0 ? "" : numero.test(number) && number.length <= 3 && +number <= 100 ? "is-valid" : "is-invalid";
}

function isAdressValid(adress: string): string {
    const adressRegex = /[a-zA-Z].*[a-zA-Z]$/;
    return adress.length === 0 ? "" : adressRegex.test(adress) ? "is-valid" : "is-invalid";
}

export const utils = {
    isEmailValid,
    isPhoneNumberValid,
    isPasswordValid,
    isNameValid,
    isYearValid,
    isDayValid,
    isMonthValid,
    isLinkValid,
    isNumberValid,
    isAdressValid
}