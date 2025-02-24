import {useFormik} from "formik";
import {Expense} from "../../model/Expense.ts";
import expenseValidationsSchema from "../../validations/expenseValidationsSchema.ts";
import MDropdown from "../../components/mDropdown.tsx";
import {expensesCategories} from "../../utils/AppConstants.ts";
import {saveOrUpdateExpense} from "../../services/expense-service.ts";
import {useState} from "react";
import {useNavigate} from "react-router-dom";


const NewExpense = () => {

    const [error, setError] = useState<string>('');
    const navigate = useNavigate();

    const formik = useFormik({
        initialValues: {
            name: '',
            amount: 0,
            note: '',
            date: new Date().toISOString().split('T')[0],
            category: ''
        },
        onSubmit: (values:Expense) => {
            saveOrUpdateExpense(values)
                .then((response)=>{
                    if(response.status === 200){
                        console.log("Expense saved successfully");
                        navigate("/");
                    }
                })
                .catch((error)=> {
                    console.log(error)
                    setError(error.message);
                });
        },
        validationSchema: expenseValidationsSchema

    });
    return (
        <div className="d-flex justify-content-center align-items-center mt-2">
            <div className="container col-md-4 col-md-4 col-sm-8 col-xs-12">
                <form onSubmit={formik.handleSubmit}>

                    {error && <p className="text-danger">{error}</p>}
                    <div className="mb-3">
                        <label htmlFor="name" className="form-label">Name</label>
                        <input
                            type="text"
                            className="form-control"
                            id="name"
                            name="name"
                            value={formik.values.name}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        />
                        {formik.touched.name && formik.errors.name ? <div className="text-danger fst-italic">{formik.errors.name}</div> : null}
                    </div>

                    <div className="mb-3">
                        <label htmlFor="amount" className="form-label">Amount</label>
                        <input
                            type="text"
                            className="form-control"
                            id="amount" name="amount"
                            value={formik.values.amount}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        />
                        {formik.touched.amount && formik.errors.amount ? <div className="text-danger fst-italic">{formik.errors.amount}</div> : null}
                    </div>

                    <div className="mb-3">
                        <label htmlFor="note" className="form-label">Note</label>
                        <textarea
                            className="form-control"
                            id="note"
                            name="note"
                            value={formik.values.note}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="date" className="form-label">Date</label>
                        <input
                            type="date"
                            className="form-control"
                            id="date"
                            name="date"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        />
                        {formik.touched.date && formik.errors.date ? <div className="text-danger fst-italic">{formik.errors.date}</div> : null}
                    </div>

                    <MDropdown
                        options={expensesCategories}
                        id="category"
                        name="category"
                        label="category"
                        value={formik.values.category}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={formik.errors.category}
                        touched={formik.touched.category}
                    />

                    <button type="submit" className="btn btn-primary">Save</button>
                    <button className="btn btn-warning mx-2">Cancel</button>
                </form>
            </div>
        </div>
    );
};
export default NewExpense;
