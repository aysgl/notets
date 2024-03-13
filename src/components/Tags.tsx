import chroma from "chroma-js";
import { StylesConfig } from "react-select";
import CreatableSelect from "react-select/creatable";
import { v4 } from "uuid";
import { Color, SelectPropsTags, Tag } from "../types/Types";

const colours = [
  "#00B8D9",
  "#0052CC",
  "#5243AA",
  "#FF5630",
  "#FF8B00",
  "#FFC400",
  "#36B37E",
  "#00875A",
  "#253858",
  "#666666",
];

// Renk stilleri
const colourStyles: StylesConfig<Color, true> = {
  control: (styles) => ({
    ...styles,
    backgroundColor: "white",
    height: "46px",
    "&:hover": { borderColor: "rgb(52 211 153)" },
    border: "1px solid #e5e7eb",
    boxShadow: "none",
  }),
  option: (styles) => {
    const color = chroma(colours[Math.floor(Math.random() * colours.length)]);
    return {
      ...styles,
      backgroundColor: color.alpha(0.1).css(),
      color: color.alpha(1).css(),
      cursor: "default",
      ":active": {
        ...styles[":active"],
        backgroundColor: color.alpha(0.3).css(),
      },
    };
  },

  multiValue: (styles, { data }) => {
    const color = data && data.color ? chroma(data.color) : chroma("gray");

    return {
      ...styles,
      backgroundColor: color.alpha(0.1).css(),
    };
  },
  multiValueLabel: (styles, { data }) => ({
    ...styles,
    color: data.color,
  }),
  multiValueRemove: (styles, { data }) => ({
    ...styles,
    color: data.color,
    ":hover": {
      backgroundColor: data.color,
      color: "white",
    },
  }),
};

const SelectTags = ({
  aTags,
  createTag,
  selected,
  setSelected,
}: SelectPropsTags) => {
  const options = aTags.map((tag) => ({
    value: tag.value,
    label: tag.label,
    color: tag.color,
  }));

  // Check if selected is an array before accessing its elements
  const selectedArray =
    Array.isArray(selected) && selected?.length > 0
      ? selected?.map((item) => ({
          value: item.value,
          label: item.label,
          color: item.color,
        }))
      : [];

  const handleCreateTag = (text: string) => {
    if (!selected) {
      const newTag: Tag = {
        label: text.trim(),
        value: v4(),
        color: colours[Math.floor(Math.random() * colours.length)],
      };
      createTag(newTag);
      setSelected([...selected, newTag]);
    } else {
      setSelected(aTags);
    }
  };

  return (
    <CreatableSelect
      isMulti
      options={options}
      value={selected ? selectedArray : null}
      styles={colourStyles}
      onChange={(selected) => setSelected(selected as Tag[])}
      onCreateOption={handleCreateTag}
    />
  );
};
export default SelectTags;
