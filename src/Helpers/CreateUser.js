
const CreateUser = async(user) => {

      await fetch(`http://localhost:5000/users`, {
        method: "PUT",
        headers: {
          "content-type": "application/json",
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
        body: JSON.stringify({
          uid: user?.uid,
          email: user?.email,
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
        });

};

export default CreateUser;