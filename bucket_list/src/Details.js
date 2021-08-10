import React from "react";
import {useSelector, useDispatch} from "react-redux";
import {deleteBucket, updateBucket} from "./redux/modules/bucket";

const Details = (props) => {
    const dispatch = useDispatch();

    const bucket_list = useSelector((state) => state.bucket.list);
    console.log(props, bucket_list);

    const bucket_index = parseInt(props.match.params.index);

    return (
        <div>
            <h1>{bucket_list[bucket_index].text}</h1>
            <button onClick={() => {
                dispatch(deleteBucket(bucket_index));
                props.history.goBack();
            }}>삭제하기</button>

            <button onClick={() => {
                dispatch(updateBucket(bucket_index));
                props.history.goBack();
            }}>완료하기</button>
        </div>);
};

export default Details