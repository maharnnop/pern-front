import React from "react";
// import { Link } from "react-router-dom";
import axios from "axios";

const UserList = (props) => {
  const handleEdit = (e) => {
    e.preventDefault();

    const data = {
      id: e.target.elements.id.value,
      name: e.target.elements.name.value,
      amount: e.target.elements.amount.value,
    };
    axios
      .put("http://localhost:3002/" + data.id, data)
      .then((res) => {
        console.log(res);
        alert("Transection edited");
        window.location.reload(false);
      })
      .catch((err) => {
        alert("Something went wrong, Try Again.");
      });
  };

  const handleDelete = (e) => {
    e.preventDefault();
    axios.delete("http://localhost:3002/" + e.target.id).then((res) => {
      console.log(res);
      alert("Transection deleted");
      window.location.reload(false);
    });
  };

  const handleCreate = (e) => {
    e.preventDefault();

    const data = {
      name: e.target.elements.name.value,
      amount: e.target.elements.amount.value,
      type: e.target.elements.type.value,
    };
    axios
      .post("http://localhost:3002/", data)
      .then((res) => {
        console.log(res);
        alert("Transection Created");
        window.location.reload(false);
      })
      .catch((err) => {
        alert("Something went wrong, Try Again.");
      });
  };

  const allList = props.users.map((item, id) => {
    return (
      <>
        <form
          method="PUT"
          id={"transection" + item.id}
          onSubmit={(e) => handleEdit(e)}
        ></form>
        <tr key={id}>
          <td>
            <input
              type="text"
              form={"transection" + item.id}
              name="id"
              defaultValue={item.id}
              disabled
            />
          </td>
          <td>
            <input
              type="text"
              form={"transection" + item.id}
              name="name"
              defaultValue={item.name}
            />
          </td>
          {item.type ? (
            <td>
              <input
              className="income"
                type="text"
                form={"transection" + item.id}
                name="amount"
                defaultValue={item.amount}
              />
            </td>
          ) : (
            <td>
              <input type="text" disabled />
            </td>
          )}

          {item.type ? (
            <td>
              <input type="text" disabled />
            </td>
          ) : (
            <td>
              <input
               className="outcome"
                type="text"
                form={"transection" + item.id}
                name="amount"
                defaultValue={item.amount}
              />
            </td>
          )}

          <td>
            <input
              type="text"
              form={"transection" + item.id}
              name="createdAt"
              defaultValue={`${item.createdAt.slice(
                8,
                10
              )}/${item.createdAt.slice(5, 7)}/${item.createdAt.slice(0, 4)}`}
              disabled
            />
          </td>

          <td>
            <input
              type="submit"
              form={"transection" + item.id}
              name="edit"
              value="edit"
            />
          </td>
          <td>
            <input
              type="button"
              id={item.id}
              value="delete"
              onClick={(e) => handleDelete(e)}
            />
          </td>
        </tr>
      </>
    );
  });

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>id</th>
            <th>Detail</th>
            <th>income</th>
            <th>outcome</th>
            <th>DD/MM/YY</th>
            <th>edit</th>
            <th>delete</th>
          </tr>
        </thead>
        <tbody>
          {allList}
          <>
            <form
              method="POST"
              id="listadd"
              onSubmit={(e) => handleCreate(e)}
            ></form>
            <tr>
              <td></td>
              <td>
                <input type="text" form="listadd" name="name" />
              </td>
              <td>
                <input type="text" form="listadd" name="amount" />
              </td>

              <select name="type" form="listadd">
                <option  value={true}>Income</option>
                <option  value={false}>Outcome</option>
              </select>
              <td></td>

              <td>
                <input type="submit" form="listadd" value="add" />
              </td>
            </tr>
          </>
        </tbody>
      </table>
    </div>
  );
};

export default UserList;
