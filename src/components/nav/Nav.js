// Dependencies
import React, { Fragment } from 'react';

// Components
import Tabs from '@mui/material/Tabs';
import GradientTab from './GradientTab';
import Contactbtn from './Contactbtn';
import DrawerRight from './DrawerRight';

export default class Nav extends React.Component {
    isMobile = () => {
        return window.innerWidth < 768;
    };
    render() {
        return !this.isMobile() ? (
            <Tabs
                value={false}
                aria-label='Navigation'
                centered
                orientation={this.isMobile() ? 'vertical' : 'horizontal'}
                style={{
                    position: 'fixed',
                    top: '0px',
                    width: '100vw',
                    background: '#040440',
                    zIndex: '100',
                }}
            >
                {this.isMobile()
                    ? ['my-projects', 'my-skills', 'work-experience'].map(
                          (text, index) => (
                              <div
                                  style={{
                                      alignItems: 'center',
                                      display: 'flex',
                                      justifyContent: 'flex-start',
                                      paddingRight: '16px',
                                      verticalAlign: 'middle',
                                      width: '225px',
                                      MozBoxAlign: 'center',
                                      MozBoxPack: 'start',
                                  }}
                              >
                                  <div style={{ margin: '4px 0px' }}>
                                      <GradientTab
                                          key={index}
                                          name={text
                                              .replace('-', ' ')
                                              .replace(/(?:^|\s)\S/g, (a) =>
                                                  a.toUpperCase()
                                              )}
                                          to={'#' + text}
                                          isMobile={this.isMobile()}
                                      />
                                  </div>
                              </div>
                          )
                      )
                    : ['my-projects', 'my-skills', 'work-experience'].map(
                          (text, index) => (
                              <GradientTab
                                  key={index}
                                  name={text
                                      .replace('-', ' ')
                                      .replace(/(?:^|\s)\S/g, (a) =>
                                          a.toUpperCase()
                                      )}
                                  to={'#' + text}
                                  isMobile={this.isMobile()}
                              />
                          )
                      )}
                {!this.isMobile() && <Contactbtn />}
            </Tabs>
        ) : (
            <DrawerRight />
        );
    }
}
