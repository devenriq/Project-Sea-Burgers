// import Swal from "sweetalert2";

(async () => {
  const { value: input } = await Swal.fire({
    title: "How many burgers you want?",
    text: "You added a burger to your card",
    icon: "question",
    input: "number",
    confirmButtonText: "Continue",
    showCancelButton: true,
  });

  if (input) {
    Swal.fire({
      title: `You added ${input} burgers!`,
    });
  }
})();
