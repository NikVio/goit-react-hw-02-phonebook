export const Contacts = ({ el: { name, id, number }, Delete }) => {
  return (
    <div>
      <p>
        {name}: <span>{number}</span>
      </p>
      <button onClick={() => Delete(id)} type="button">
        Delete
      </button>
    </div>
  );
};
