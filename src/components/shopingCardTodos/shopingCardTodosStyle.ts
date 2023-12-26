const cardStyle = {
  width: {xs:"47%",sm:"31.3%",md:"43%"},
  pt: "2%",
  mt: 0,
  mb:2,
  mx: "1%",
  position: "relative",
};
const boxMediaStyle = {
  height: "80%",
  width: "50%",
  mx: "15%",
};
const boxActionStyle = { mb:0,pb:0 };
const cardMedoaStyle = { height: "80%",width:"150%" ,mb:0,pb:0};
const cardActionsStyle = { display: "flex", justifyContent: "space-between" ,py:0};
const btnAddStyle = {
  bgcolor: "#F59794",pt:0,
  color: "#FFFFFF",
  "&:hover": {
    backgroundColor: "#F2314E",
  },
};
const btnShowStyle = {
  bgcolor: "#42b4e5",
  color: "#0F1111",
  "&:hover": {
    backgroundColor: "#1597DD",
  },
};
const toastContainerStyle = {
  backgroundColor: "#eaeaea",
  padding: "0",
};
export {
  cardStyle,
  boxMediaStyle,
  cardMedoaStyle,
  boxActionStyle,
  cardActionsStyle,
  btnAddStyle,
  btnShowStyle,
  toastContainerStyle,
};
