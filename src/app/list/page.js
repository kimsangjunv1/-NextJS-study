import Image from "next/image";

export default function List() {
  let 상품 = ["토마토", "파스타", "코코넛"];
  let 가격 = [1000, 2000, 300];
  return (
    <div>
      <h2 className="title">상품목록</h2>
      {상품.map((item, index) => {
        return (
          <div className="food">
            <img src={`/game${index}.png`} className="game_img" alt="" />
            <h2 key={index}>
              {상품[index]} {가격[index]}원
            </h2>
          </div>
        );
      })}
      {/* <div className="food">
        <h2>{상품[0]} 1000원</h2>
      </div>
      <div className="food">
        <h2>{상품[1]} 200원</h2>
      </div> */}
    </div>
  );
}
