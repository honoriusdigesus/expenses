export interface Expense{//Esta es la interfaz que se va a utilizar para definir los objetos de tipo Expense
    id?: number;
    expenseId?: number;
    name: string;
    note: string;
    amount: number;
    date: string;
    category: string;
}
