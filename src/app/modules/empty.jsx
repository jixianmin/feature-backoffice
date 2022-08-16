import { KTSVG } from "src/_metronic/helpers";

const EmptyPage = () => (
  <div className="alert alert-dismissible bg-light-danger d-flex flex-center flex-column py-10 px-10 px-lg-20 mb-10">
    <KTSVG
      path="/media/icons/duotune/general/gen045.svg"
      className="svg-icon svg-icon-5tx svg-icon-danger mb-5"
    />

    <div className="text-center">
      <h5 className="fw-bolder fs-1 mb-5">공사중 입니다 :)</h5>

      <div className="separator separator-dashed border-danger opacity-25 mb-5"></div>

      <div className="mb-9">
        현 페이지는 개발 중이므로 문의사항 있을 시 <strong>담당 개발자</strong>{" "}
        에게 문의해주시기 바랍니다.
      </div>
    </div>
  </div>
);

export default EmptyPage;
