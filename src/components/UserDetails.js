import React, { useEffect } from "react";
import { TbArrowBackUp } from "react-icons/tb";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { fetchUser } from "../features/users/userSlice";

const UserDetails = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const { user } = useSelector((state) => state.user);
  const { name, email, phone, address, website, company } = user || {};
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(fetchUser(id));
  }, [dispatch, id]);
  return (
    <div className="max-w-[800px] mx-auto py-6 px-6">
      <div className="flex justify-end">
        <button onClick={() => navigate("/users")}>
          <TbArrowBackUp size={30} color="#9a9090" />
        </button>
      </div>
      <div className="flex items-center gap-x-6 border-b pb-8">
        <img
          className="w-[50px] h-[50px] md:w-[100px] md:h-[100px] rounded-full"
          src="https://thumbs.dreamstime.com/b/user-icon-trendy-flat-style-isolated-grey-background-user-symbol-user-icon-trendy-flat-style-isolated-grey-background-123663211.jpg"
          alt=""
        />
        <div>
          <h2 className="text-[22px] md:text-[30px] font-medium uppercase">
            {name}
          </h2>
          <p className="text-[16px] md:text-[20px]">{company?.catchPhrase}</p>
        </div>
      </div>
      <div className="py-6 space-y-6 md:space-y-0 md:flex justify-between">
        <div>
          <h2 className="text-[24px] font-medium uppercase">Address</h2>
          <address>
            <p>
              <span className="font-medium">City</span> : {address?.city}
            </p>
            <p>
              <span className="font-medium">Street</span> : {address?.street}
            </p>
            <p>
              <span className="font-medium">Suite</span> : {address?.suite}
            </p>
            <p>
              <span className="font-medium">Zip code</span> : {address?.zipcode}
            </p>
          </address>
        </div>
        <div className="shadow-xl px-8 py-6 w-[350px] ml-auto rounded space-y-2">
          <div>
            <h2 className="font-medium text-[20px]">Phone:</h2>
            <p>{phone}</p>
          </div>
          <div>
            <h2 className="font-medium text-[20px]">Email:</h2>
            <p>{email}</p>
          </div>
          <div>
            <h2 className="font-medium text-[20px]">Company:</h2>
            <p>{company?.name}</p>
          </div>
          <div>
            <h2 className="font-medium text-[20px]">Website:</h2>
            <p className="underline text-blue-400 cursor-pointer">{website}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDetails;
