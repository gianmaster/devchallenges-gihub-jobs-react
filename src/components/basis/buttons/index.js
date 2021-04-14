import styled from 'styled-components'

const Button = styled.button`
    display: inline-block;
    background-color: ${(props) => props.primary ? 'palevioletred' : 'white'};
    color: ${(props) => props.primary ? 'white' : 'palevioletred'};
    font-size: 1em;
    margin: 1em;
    padding: 0.25em 1em;
    border: 2px solid palevioletred;
    border-radius:3px;
    display: block;
`

const TomatoButton = styled(Button)`
    color: tomato;
    border-color: tomato;
`

export { Button, TomatoButton }
