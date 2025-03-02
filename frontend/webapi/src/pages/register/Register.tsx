import {useFormik} from "formik";
import {Profile} from "../../model/Profile.ts";
import profileValidationSchema from "../../validations/profileValidationsSchema.ts";
import {userRegister} from "../../hooks/userRegister.ts";


const Register = () => {

    const {error,isLoading,toast, singup} = userRegister();

    const formik = useFormik<Profile>({
        initialValues:{
            name: '',
            email: '',
            password: '',
            confirmPassword: ''
        },
        validationSchema: profileValidationSchema,
        onSubmit: (profile:Profile,{resetForm}) => {
            console.log("profile",profile);
            singup(profile);
            resetForm();
        }
    })
    return <div className="d-flex justify-content-center align-items-center login-background">
        <div className="container col-md-4 col-sm-12">

            {toast && <div className="text-success fst-italic">{toast}</div>}
            <form onSubmit={formik.handleSubmit} className="mb-3">
                <h3 className="text-center">Register</h3>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Name</label>
                    <input
                        type="text"
                        className="form-control"
                        id="name"
                        placeholder="Enter your name"
                        name="name"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.name}
                    />
                    {<div className="text-danger fst-italic">{formik.errors.name}</div>}
                </div>

                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email address</label>
                    <input
                        type="email"
                        className="form-control"
                        id="email"
                        placeholder="Enter email"
                        name="email"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.email}
                    />
                    <div className="text-danger fst-italic">{formik.errors.email}</div>
                </div>

                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input
                        type="password"
                        className="form-control"
                        id="password"
                        placeholder="Password"
                        name="password"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.password}
                    />
                    <div className="text-danger fst-italic">{formik.errors.password}</div>
                </div>

                <div className="mb-3">
                    <label htmlFor="confirmPassword" className="form-label">Confirm Password</label>
                    <input
                        type="password"
                        className="form-control"
                        id="confirmPassword"
                        placeholder="Confirm Password"
                        name="confirmPassword"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.confirmPassword}
                    />
                    <div className="text-danger fst-italic">{formik.errors.confirmPassword}</div>
                </div>

                <div className="justify-content-between">
                    <button type="submit" className="btn btn-primary m-2">Register</button>
                    <button type="reset" className="btn btn-danger">Reset</button>
                </div>

            </form>
        </div>
    </div>
};
export default Register;
