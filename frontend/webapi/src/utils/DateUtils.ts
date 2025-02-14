class DateUtils{
    static getFormatDate(date: Date): string {
        const days = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
        const months = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];

        const dayName = days[date.getDay()];
        const monthName = months[date.getMonth()];
        const day = date.getDate();
        //const month = date.getMonth() + 1;
        const year = date.getFullYear();

        return `${dayName}, ${day} de ${monthName} de ${year}`;
    }
}

export default DateUtils;