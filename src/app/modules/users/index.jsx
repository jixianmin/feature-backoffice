/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState, useCallback } from "react";
import { KTSVG, toAbsoluteUrl } from "src/_metronic/helpers";
import { getUsersApi } from "src/api/user/get";

const UserList = ({ className }) => {
  const [filters, setFilters] = useState({
    level: "",
    name: "",
    nickname: "",
    email: "",
    hp: "",
    code: "",
    nation: "",
    start_at: "",
    end_at: "",
    blind: "",
  });
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPage, setTotalPage] = useState(0);

  const [buckets, setBuckets] = useState([]);

  const fetchData = useCallback(async () => {
    const payload = {
      ...filters,
      page: currentPage,
      perPage: 10,
      pagination: "Y",
    };

    await getUsersApi(payload)
      .then(({ data }) => {
        if (data.success) {
          setBuckets(data.data.data);
          setTotalPage(data.data.total);
        }
      })
      .catch((e) => {});
  }, [filters]);

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className={`card ${className}`}>
      {/* begin::Header */}
      <div className="card-header border-0 pt-5">
        <h3 className="card-title align-items-start flex-column">
          <span className="card-label fw-bold fs-3 mb-1">회원관리</span>
          <span className="text-muted mt-1 fw-semibold fs-7">
            조회결과 : {totalPage}명
          </span>
        </h3>
        <div className="card-toolbar">
          {/* begin::Menu */}
          <button
            type="button"
            className="btn btn-sm btn-icon btn-color-primary btn-active-light-primary"
            data-kt-menu-trigger="click"
            data-kt-menu-placement="bottom-end"
            data-kt-menu-flip="top-end"
          >
            <KTSVG
              path="/media/icons/duotune/general/gen024.svg"
              className="svg-icon-2"
            />
          </button>
          {/* begin::Menu 2 */}
          <div
            className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold w-200px"
            data-kt-menu="true"
          >
            {/* begin::Menu item */}
            <div className="menu-item px-3">
              <div className="menu-content fs-6 text-dark fw-bold px-3 py-4">
                Quick Actions
              </div>
            </div>
            {/* end::Menu item */}
            {/* begin::Menu separator */}
            <div className="separator mb-3 opacity-75"></div>
            {/* end::Menu separator */}
            {/* begin::Menu item */}
            <div className="menu-item px-3">
              <a href="#" className="menu-link px-3">
                New Ticket
              </a>
            </div>
            {/* end::Menu item */}
            {/* begin::Menu item */}
            <div className="menu-item px-3">
              <a href="#" className="menu-link px-3">
                New Customer
              </a>
            </div>
            {/* end::Menu item */}
            {/* begin::Menu item */}
            <div
              className="menu-item px-3"
              data-kt-menu-trigger="hover"
              data-kt-menu-placement="right-start"
              data-kt-menu-flip="left-start, top"
            >
              {/* begin::Menu item */}
              <a href="#" className="menu-link px-3">
                <span className="menu-title">New Group</span>
                <span className="menu-arrow"></span>
              </a>
              {/* end::Menu item */}
              {/* begin::Menu sub */}
              <div className="menu-sub menu-sub-dropdown w-175px py-4">
                {/* begin::Menu item */}
                <div className="menu-item px-3">
                  <a href="#" className="menu-link px-3">
                    Admin Group
                  </a>
                </div>
                {/* end::Menu item */}
                {/* begin::Menu item */}
                <div className="menu-item px-3">
                  <a href="#" className="menu-link px-3">
                    Staff Group
                  </a>
                </div>
                {/* end::Menu item */}
                {/* begin::Menu item */}
                <div className="menu-item px-3">
                  <a href="#" className="menu-link px-3">
                    Member Group
                  </a>
                </div>
                {/* end::Menu item */}
              </div>
              {/* end::Menu sub */}
            </div>
            {/* end::Menu item */}
            {/* begin::Menu item */}
            <div className="menu-item px-3">
              <a href="#" className="menu-link px-3">
                New Contact
              </a>
            </div>
            {/* end::Menu item */}
            {/* begin::Menu separator */}
            <div className="separator mt-3 opacity-75"></div>
            {/* end::Menu separator */}
            {/* begin::Menu item */}
            <div className="menu-item px-3">
              <div className="menu-content px-3 py-3">
                <a className="btn btn-primary btn-sm px-4" href="#">
                  Generate Reports
                </a>
              </div>
            </div>
            {/* end::Menu item */}
          </div>
          {/* end::Menu 2 */}
          {/* end::Menu */}
        </div>
      </div>
      {/* end::Header */}
      {/* begin::Body */}
      <div className="card-body py-3">
        {/* begin::Table container */}
        <div className="table-responsive">
          {/* begin::Table */}
          <table className="table table-row-bordered align-middle gs-0 gy-4">
            {/* begin::Table head */}
            <thead>
              <tr className="fw-bold text-muted bg-light">
                <th className="ps-4 min-w-50px rounded-start">No</th>
                <th className="min-w-150px">이름</th>
                <th className="min-w-125px">상태</th>
                <th className="min-w-250px">이메일</th>
                <th className="min-w-150px">국가</th>
                <th className="min-w-150px">등록일</th>
                <th className="min-w-200px text-end rounded-end"></th>
              </tr>
            </thead>
            {/* end::Table head */}
            {/* begin::Table body */}
            <tbody>
              {buckets.length > 0 &&
                buckets.map((item, index) => (
                  <tr key={index}>
                    <td>
                      <div className="d-flex align-items-center">
                        <div className="symbol symbol-50px me-5">
                          <span className="symbol-label bg-light">
                            {item.id}
                          </span>
                        </div>
                      </div>
                    </td>
                    <td>
                      <span className="text-dark fw-bold text-hover-primary mb-1 fs-6">
                        {item.name}
                      </span>
                    </td>
                    <td>
                      <span className="badge badge-light-primary">활성</span>
                    </td>
                    <td>
                      <span className="text-dark fw-bold text-hover-primary d-block mb-1 fs-6">
                        {item.email}
                      </span>
                    </td>
                    <td>
                      <span className="text-dark fw-bold text-hover-primary d-block mb-1 fs-6">
                        {item.nation}
                      </span>
                    </td>
                    <td>
                      <span className="text-dark fw-bold text-hover-primary d-block mb-1 fs-6">
                        {item.created_at}
                      </span>
                    </td>
                    <td className="text-end">
                      <a
                        href="#"
                        className="btn btn-bg-light btn-color-muted btn-active-color-primary btn-sm px-4 me-2"
                      >
                        상세
                      </a>
                      <a
                        href="#"
                        className="btn btn-bg-light btn-color-muted btn-active-color-primary btn-sm px-4"
                      >
                        수정
                      </a>
                    </td>
                  </tr>
                ))}
            </tbody>
            {/* end::Table body */}
          </table>
          {/* end::Table */}
        </div>
        {/* end::Table container */}
      </div>
      {/* begin::Body */}
    </div>
  );
};
export default UserList;
