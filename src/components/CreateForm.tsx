import { useState } from "react";
import "./style/styleForm.css";
import { Text } from "../types";

interface FormState {
  inputValues: Text;
}

interface FormProps {
  onNewText: React.Dispatch<React.SetStateAction<Text[]>>;
}

const CreateForm = ({ onNewText }: FormProps) => {
  const [inputValue, setInputValue] = useState<FormState["inputValues"]>({
    author: "",
    phrase: "",
    img: "",
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onNewText((texts) => [...texts, inputValue]);
    handleClear();
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setInputValue({
      ...inputValue,
      [e.target.name]: e.target.value,
    });
  };

  const handleClear = () => {
    setInputValue({
      author: "",
      phrase: "",
      img: "",
    });
  };

  return (
    <div className="container1">
      <form onSubmit={handleSubmit}>
        <input
          onChange={handleChange}
          value={inputValue.author}
          type="text"
          name="author"
          placeholder="author"
        />
        <textarea
          onChange={handleChange}
          value={inputValue.phrase}
          name="phrase"
          placeholder="description"
        />
        <input
          onChange={handleChange}
          value={inputValue.img}
          type="text"
          name="img"
          placeholder="image"
        />
        <button className="btn" type="submit">
          Save new phrase
        </button>
      </form>
    </div>
  );
};
export default CreateForm;
