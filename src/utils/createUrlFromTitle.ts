const createUrlFromTitle = ({ title, id }) => `/blog/${title.replace(/ /g, "_")}?_id=${id}`;
export default createUrlFromTitle;
