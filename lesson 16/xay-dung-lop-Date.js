let MyDate = function (day, month, year) {
    this.day = day;
    this.month = month;
    this.year = year;

    this.getDay = function () {
        return this.day;
    };

    this.getMonth = function () {
        return this.month;
    };

    this.getYear = function () {
        return this.year;
    };

    this.setDay = function (day) {
        this.day = day;
    };

    this.setMonth = function (month) {
        this.month = month;
    };

    this.setYear = function (year) {
        this.year = year;
    };

    this.isValidDate = function (day, month, year) {
        if (year < 1) return false;
        if (month < 1 || month > 12) return false;
        
        // Số ngày tối đa của mỗi tháng
        const daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
        
        // Kiểm tra năm nhuận
        if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
            daysInMonth[1] = 29; // Tháng 2 có 29 ngày
        }

        return day >= 1 && day <= daysInMonth[month - 1];
    };

    this.setDate = function (day, month, year) {
        if (this.isValidDate(day, month, year)) {
            this.setDay(day);
            this.setMonth(month);
            this.setYear(year);
        } else {
            console.error("Ngày không hợp lệ!");
        }
    };

    this.toString = function () {
        const day = String(this.getDay()).padStart(2, '0');
        const month = String(this.getMonth()).padStart(2, '0');
        const year = this.getYear();
        return `${day}/${month}/${year}`;
    };
};

let date = new MyDate(2, 2, 2007);
date.setDate(30, 2, 2023); // Ngày không hợp lệ!
console.log(date.toString()); // 30/02/2007 (không thay đổi do ngày không hợp lệ)

date.setDate(29, 2, 2024); // Ngày hợp lệ (năm nhuận)
console.log(date.toString()); // 29/02/2024
