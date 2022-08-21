// import Swal from "sweetalert2";

export const formAlert = async () => {
  const { value: input } = await Swal.fire({
    title: "How many burgers do you want?",
    text: "Please, enter the quantity of burgers you wanna buy",
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
};
