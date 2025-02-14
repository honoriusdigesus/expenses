import DateUtils from "../../utils/DateUtils.ts";
import CurrencyUtils from "../../utils/CurrencyUtils.ts";

interface Props{
    loggedInUser: string;
    totalExpenses: number;
}

const DashboardStatus = ({loggedInUser,totalExpenses}:Props) => {
    return (
        <div className="mt-2">
           <div className="text-center">
               <h5 className="mb-4">Total expenses</h5>
               <h3>
                   <span className="badge rounded-pill app-primary-bg-color">{CurrencyUtils.formatToINR(totalExpenses)}</span>
               </h3>
           </div>
            <div className="d-flex justify-content-between">
                <div>Hello, <b className="text-primary">{loggedInUser}</b></div>
                <div>{DateUtils.getFormatDate(new Date())}</div>
            </div>
        </div>
    );
};
export default DashboardStatus;
