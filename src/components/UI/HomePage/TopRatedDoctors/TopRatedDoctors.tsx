const TopRatedDoctors = async () => {
  const res = await fetch("url/doctor?page=1&limit=3");
  //   page and limt is going here cause i don't want to fetch all the doctor here i need only 3 so i fetch only 3

  return <div></div>;
};
export default TopRatedDoctors;
