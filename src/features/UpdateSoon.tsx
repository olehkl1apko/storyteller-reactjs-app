import { useLocation } from "react-router-dom";

export const UpdateSoon = () => {
  const location = useLocation();
  const pathParts = location.pathname.split("/");
  const slug = pathParts[pathParts.length - 1];
  const capitalizedSlug = slug.charAt(0).toUpperCase() + slug.slice(1);

  return (
    <div className="text-3xl flex items-center justify-center w-full h-full text-slate-500">
      <span>{`${capitalizedSlug} functionality at work. Expect an update soon!`}</span>
    </div>
  );
};
