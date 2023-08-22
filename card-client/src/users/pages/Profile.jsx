import React, { useEffect } from "react";
import { getUserData } from "../services/usersApiService";

export default function Profile() {
  const getUser = async () => {
    try {
      const userData = await getUserData();
    } catch (error) {
    }
  };
  useEffect(() => {
    getUser();
  }, []);
  return <div></div>;
}
