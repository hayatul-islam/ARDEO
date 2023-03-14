import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../features/users/usersSlice";
import User from "./User";

const Users = () => {
  const dispatch = useDispatch();
  const { users, isLoading, isError, error } = useSelector(
    (state) => state.users
  );

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  // decide what to render
  let content;
  if (isLoading) content = <div className="col-span-12">Loading...</div>;
  if (!isLoading && isError)
    content = <div className="col-span-12">{error}</div>;
  if (!isError && !isLoading && users?.length === 0) {
    content = <div className="col-span-12">No Users found!</div>;
  }
  if (!isError && !isLoading && users?.length > 0) {
    content = users?.map((user) => <User key={user?.id} user={user} />);
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 py-12 mx-12">
      {content}
    </div>
  );
};

export default Users;
