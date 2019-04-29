import React, { Component } from 'react'
import styled from 'styled-components';
import {IoLogoGithub} from 'react-icons/io'

var Foot = styled.p`

margin: .4% 9%;
padding-top: 3px;
font-size:30px;
`
var B = styled.a`
margin: 0 2%;
font-size: 75%;
color:blueviolet;`

var Div = styled.div`
background-image:url('https://66.media.tumblr.com/81c6db27363b0c87990f58711f4c315c/tumblr_pb467re9mh1tu03dbo7_r1_250.gif');`

export default class Footer extends Component {
    render() {
    return (
        <Div>
            <Foot>
            <nav>
                <a href="https:/github.com/labs12-should-i-live-here/Front-End"><IoLogoGithub/></a>
                <B>sitemap</B>
            </nav>
            </Foot>
        </Div>
    )
    }
}

//react-router-sitemap might be the best option for a sitemap generator. Sitemaps help with the SEO
