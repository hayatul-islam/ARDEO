import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { fetchUsers } from "../features/users/usersSlice";

const Users = () => {
  const dispatch = useDispatch();
  const { users } = useSelector((state) => state.users);
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  return (
    <div className="grid grid-cols-3 gap-12 py-12 mx-12">
      {users?.map((user) => (
        <div key={user?.id} className="border px-6 shadow-lg rounded">
          <div className="flex justify-end space-x-1 items-center pt-2">
            <p className="h-[8px] w-[8px] bg-[#692238] rounded-full border" />
            <p className="text-[14px] leading-none">{user?.address?.city}</p>
          </div>
          <div className="space-y-4">
            <div className="-mt-4">
              <h2 className="text-[20px] font-bold">{user?.name}</h2>
              <p>{user?.email}</p>
            </div>
            <div>
              <address>
                <p>{user?.address?.street}</p>
                <p>{user?.address?.suite}</p>
                <p>{user?.address?.zipcode}</p>
              </address>
            </div>
            <div className="flex justify-between items-center pb-3">
              <h4>{user?.phone}</h4>
              <button
                onClick={() => navigate(`/users/${user?.id}`)}
                className="text-[#692238] font-bold underline text-[14px]"
                type="button"
              >
                View more
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Users;
