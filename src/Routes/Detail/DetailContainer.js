import React from "react";
import DetailPresenter from "./DetailPresenter";
import {movieApi, tvApi} from "../../api";

export default class extends React.Component {

    state = {
        result : null,
        error: null,
        loading : true,
    };

    async componentDidMount() {
        const {match: {params : {id}}, history : {push}} = this.props;
        this.setState({loading : true});

        if (isNaN(id))
            return push("/");

        let result = null;
        try {
            /** 이게 말이 돼? fucking awesome 전체 괄호는 const와 동일 */
            ({data : result} = await this.getDetailResult(id));
        } catch (e) {
            this.setState({error : "Can't find anything."});
        } finally {
            this.setState({loading : false, result})
        }
    }

    getDetailResult = async (id) => {
        if (this.isMovie)
            return await movieApi.movieDetail(id);

        return await tvApi.tvDetail(id);
    }

    isMovie = () => {
        const {location : {pathname}} = this.props;
        return pathname.includes("/movie/")
    }



    render() {
        const {result, error, loading} = this.state;
        return (
            <DetailPresenter
                result={result}
                error={error}
                loading={loading}
            />)
    }
}