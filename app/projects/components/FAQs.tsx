const FAQs = () => {
  const FAQ = [
    {
      question: "How many bones does a cat have?",
      answer:
        "The possession status of DLF The Aralias is Ready to Move and is available for possession in/from Oct, 2009.",
    },
    {
      question: "How much do cats sleep?",
      answer:
        "The possession status of DLF The Aralias is Ready to Move and is available for possession in/from Oct, 2009.",
    },
    {
      question: "How long do cats live",
      answer:
        "The possession status of DLF The Aralias is Ready to Move and is available for possession in/from Oct, 2009.",
    },
  ];
  return (
    <div className="w-full bg-white border py-8 px-6 rounded-2xl">
      <h1 className="text-xl font-bold">DLF The Aralias FAQs</h1>
      <div className="divider"></div>
      {FAQ.map((question, i) => (
        <details
          className="leading-7 border relative p-2 my-3 cursor-pointer rounded-lg hover:bg-primary hover:bg-opacity-20 open:bg-primary open:bg-opacity-20 transition duration-300"
          key={i}
        >
          <summary className="outline-none w-full text-lg font-semibold marker:transition">
            {question.question}
            <div className="absolute inset-0"></div>
          </summary>
          {question.answer}
        </details>
      ))}
    </div>
  );
};

export default FAQs;
