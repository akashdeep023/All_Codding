import { useState } from "react";

export default function CommentsForm() {
  let [formData, setFormData] = useState({
    username: "",
    remark: "",
    rating: 5,
  });
  let handleInputData = (event) => {
    setFormData((currData) => {
      return { ...currData, [event.target.name]: event.target.value };
    });
  };

  let handleSubmit = (event) => {
    console.log(formData);
    event.preventDefault();
    setFormData({
      username: "",
      remark: "",
      rating: 5,
    });
  };
  return (
    <div>
      <h4>Give a Comments!</h4>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">UserName</label>&nbsp;&nbsp;
        <input
          type="text"
          placeholder="Username"
          name="username"
          value={formData.username}
          onChange={handleInputData}
          id="username"
        />
        <br />
        <br />
        <label htmlFor="remark">Remark</label>&nbsp;&nbsp;
        <textarea
          placeholder="Add few Remark"
          name="remark"
          value={formData.remark}
          cols="20"
          rows="3"
          onChange={handleInputData}
          id="remark"
        ></textarea>
        <br />
        <br />
        <label htmlFor="rating">Rating</label>&nbsp;&nbsp;
        <input
          type="number"
          name="rating"
          value={formData.rating}
          placeholder="Rating"
          min={1}
          max={5}
          onChange={handleInputData}
          id="rating"
        />
        <br />
        <br />
        <button>Add Comment</button>
      </form>
    </div>
  );
}
