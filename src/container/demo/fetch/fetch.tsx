/**
 * @format
 * @Author: Alvin
 * @Date 2020-02-25
 * @Last modified by: Alvin
 * @Last modified time: 2020-02-25
 */

import React, {Component} from "react";
import {decrement, increment} from "../count/counterStore";
import {connect} from "react-redux";
import {fetchUser, fetchUserFulfilled} from "./fetchStore";

const FetchComponent = ({users, current, loading, loadUser}: any) => {
  return (
    <div>
      <ul>
        {users.map((login: any) => <li key={login}>{login} <button type={"button"} onClick={() => loadUser(login) }>Load User</button></li>)}
      </ul>
      {loading && <p>Please wait...</p>}
      {current && <span>Current User: {JSON.stringify(current, null, 2)}</span>}
    </div>
  );
};

const  mapStateToProps = (state: any) => {
  return {
    users: state.fetch.users,
    current: state.fetch.current,
    loading: state.fetch.loading
  }
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    loadUser: (item: any) => dispatch(fetchUser(item)),
    fetchUserFulfilled: (user: any) => dispatch(fetchUserFulfilled(user))
  }
};

const Fetch = connect(mapStateToProps, mapDispatchToProps)(FetchComponent);

export default Fetch;
