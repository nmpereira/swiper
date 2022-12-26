import { Avatar } from "@chakra-ui/react";

function Likes() {
  return (
    <div className="likes">
      <div className="likes__container">
        <div className="likes__container__header">
          <h1>Likes</h1>
        </div>
        <div className="likes__container__body">
          <div className="likes__container__body__card">
            <div className="likes__container__body__card__image">
              <Avatar
                size="lg"
                name="Dan Abrahmov"
                src="https://picsum.photos/200/300"
                m="1"
              />
            </div>
            <div className="likes__container__body__card__name">
              <h1>John Doe</h1>
            </div>
            <div className="likes__container__body__card__button">
              <button className="btn btn-primary">Like</button>
            </div>
          </div>

          <div className="likes__container__body__card">
            <div className="likes__container__body__card__image">
              <Avatar
                size="lg"
                name="Dan Abrahmov"
                src="https://picsum.photos/200/300"
                m="1"
              />
            </div>
            <div className="likes__container__body__card__name">
              <h1>John Doe</h1>
            </div>
            <div className="likes__container__body__card__button">
              <button className="btn btn-primary">Like</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Likes;
