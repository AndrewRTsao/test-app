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

      window.CommandBar.addComponent('record-facts-preview', 'Basic Facts about Dog Breed', {
        mount: (elem) => ({
          render: (data, metadata) => {
            elem.innerHTML = '<div>' + 
            '<h3>Basic Facts</h3>' +
            '<div className="card-body">' +
            '<h6 className="card-title"></h6>' +
            '<p className="card-text"><b>Breed: </b>' + data.name + '</p>' +
            '<p className="card-text"><b>Height (inches): </b>' + data.height.imperial + '</p>' +
            '<p className="card-text"><b>Weight (pounds): </b>' + data.weight.imperial + '</p>' +
            '<p className="card-text"><b>Average Life Span: </b>' + data.life_span + '</p>' +
            '<p className="card-text"><b>Breeding Group: </b>' + data.breed_group + '</p>' +
            '<p className="card-text"><b>Strengths: </b>' + data.bred_for + '</p>' +
            '<p className="card-text"><b>Temperament: </b>' + data.temperament + '</p>' +
            '<p className="card-text"><b>Countries of Origin: </b>' + data.origin+ '</p>' +
            '</div>' +
            '</div>';
          },
          unmount: (elem) => {
          },
        }),
      });
      
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

      window.CommandBar.addRecords("dog_records", listBreeds,
        {
          labelKey: "name",
          detail: { type: 'component', value: 'record-facts-preview' }
        });
      }, [])
};

export default useCommandBar;