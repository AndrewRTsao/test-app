import React from 'react';
import { init } from 'commandbar';
import { useNavigate } from 'react-router-dom';

init('3140d339');

const useCommandBar = () => {
    const loggedInUserId = '12345';
    window.CommandBar.boot(loggedInUserId);

    const navigate = useNavigate();
    
    React.useEffect(() => {
        function router(url) {
          navigate(url);
        }

        window.CommandBar.addRouter(router);
      }, [navigate]);

};

export default useCommandBar;