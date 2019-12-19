import React, { Component } from 'react'
import { connect } from 'react-redux'
import styles from './home.module.scss'
import { Container, Row, Col, Button } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import axios from 'axios'

class Home extends Component {
  checklogin = async () => {
    console.log('Checking login')
    const res = await axios.post(`http://localhost:3001/api/user/check`)
    console.log('authenticated? ' + res)
  }

  render() {
    return (
      <div className={styles.home}>
        <Container>
          {this.props.authenticated ? (
            this.props.user.active ? (
              <Row>
                <Col>
                  <div className={styles.container}>
                    <LinkContainer to="/app">
                      <Button variant="primary" size="lg" block>
                        Abrir el confettibot
                      </Button>
                    </LinkContainer>
                  </div>
                </Col>
              </Row>
            ) : (
              <Row>
                <Col>
                  <div className={styles.container}>
                    <LinkContainer to="/activar">
                      <Button variant="primary" size="lg" block>
                        Activa tu cuenta aquí
                      </Button>
                    </LinkContainer>
                  </div>
                </Col>
              </Row>
            )
          ) : (
            <Col>
              <Row>
                <div className={styles.container}>
                  <strong>Bienvenido/a!</strong>
                  <br />
                  <h2>
                    <LinkContainer to="/login">
                      <Button variant="outline-primary">Inicia sesión</Button>
                    </LinkContainer>{' '}
                    para continuar.
                    <br />
                    <br />O{' '}
                    <LinkContainer to="/registration">
                      <Button variant="outline-primary">
                        regístrate aquí.
                      </Button>
                    </LinkContainer>{' '}
                    <br />
                    <br />
                    Recuerda compartirnos con tus amigos.
                    <br />
                  </h2>
                </div>
              </Row>
              <Row>
                <div className={styles.container}>
                  <h2>
                    Tan sólo tienes que{' '}
                    <LinkContainer to="/registration">
                      <Button variant="outline-primary">crear</Button>
                    </LinkContainer>{' '}
                    y{' '}
                    <LinkContainer to="/instrucciones">
                      <Button variant="outline-primary">activar</Button>
                    </LinkContainer>{' '}
                    tu cuenta para comenzar.
                  </h2>
                </div>
              </Row>
            </Col>
          )}
        </Container>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    authenticated: state.authenticated,
    user: state.user
  }
}

export default connect(mapStateToProps)(Home)
