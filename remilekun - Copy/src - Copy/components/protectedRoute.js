import { Route, Redirect } from 'react-router-dom';
import auth from './auth';


export const protectedRoute = ({component : Component, ...rest}) => {
    return (
        <Route {...rest}
         render= {
            (props) => {
                if(auth.isAuthenticated()) {
                    return <Component {...props} />
                }
                else{
                    return <Redirect to= {
                        {
                            pathname: '/register',
                            state: {
                                from: props.location
                            }
                        }
                    }/>
                }
            }
        }

        />
    )
}

        
