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

    React.useEffect(() => {

      const listBreeds = () => {
        return fetch('https://api.thedogapi.com/v1/breeds/')
        .then(response => response.json())
      };

      window.CommandBar.addArgumentChoices("breeds_test", 
        [
          {id: 1, name: "Affenpinscher"},
          {id: 2, name: "Afghan Hound"},
          {id: 3, name: "African Hunting Dog"},
          {id: 4, name: "Airedale Terrier"}
        ],
        {
          labelKey: "name"
        }
      );

      window.CommandBar.addArgumentChoices('breeds', listBreeds,
        {
          labelKey: "name"
        });

    }, [])


};

export default useCommandBar;