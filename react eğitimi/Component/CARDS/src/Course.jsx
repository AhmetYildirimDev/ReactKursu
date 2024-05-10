import React from "react";

export const Course = ({ image, title, description }) => {
  // console.log(props);
  // const {title, description} = props;

  return (
    <>
      <div class="card">
        <div class="card-image">
          <figure class="image is-4by3">
            <img src={image} alt="Kurslarım" />
          </figure>
        </div>
        <div class="card-content">
          <div class="media">
            <div class="media-content">
              <p class="title is-4">{title}</p>
            </div>
          </div>

          <div class="content">{description}</div>
        </div>
      </div>

      {/* 
      <img src={image} alt="" />
      <div>{title}</div>
      <div>{description}</div> */}
    </>
  );
};
