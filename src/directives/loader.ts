const loader = function() {
  let content = null;

  return (el, { value }, { elm }) => {
    if (value) {
      if (content) {
        elm = content;
        content = null;
      }
    } else {
      const comment = document.createComment("");
      content = elm;
      elm = comment;
    }
  };
};

export default loader();
