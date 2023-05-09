'use client';
import AdminSidebar from "../../components/adminSidebar";
function CategoryLayout({ children }) {
    return (

        <div className="row">

            <div className="col-md-12 col-lg-2 mb-4 mb-lg-0 pt-4 ">

                <AdminSidebar />
                ATELIER 7 : OPERATIONS CRUD AVEC NEXT JS
            </div>
            <div className="col-md-12 col-lg-9 mb-4 mb-lg-0 pt-4 ">
                {children}
            </div>

        </div>


    );
}
export default CategoryLayout; 
