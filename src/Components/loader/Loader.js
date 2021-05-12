import Loader from "react-loader-spinner";


export default class App extends React.Component {

    render() {
        return (
            <Loader
                type="Puff"
                color="#00BFFF"
                height={100}
                width={100}
                timeout={4000} //4 secs
            />
        );
    }
}