import React from 'react'
import { Button } from 'semantic-ui-react'
// import FilterLink from '../containers/FilterLink'

import './Login.css'

const Login = () => (
  <div>
    <div id="DIV_1">
	<h1 id="H1_2">
		Contact Center Login
	</h1>
	<div id="DIV_3">
		<form name="loginForm" id="FORM_4">
			<div id="DIV_5">
				<ul id="UL_6">
					<li id="LI_7">
						 
						<label for="sine-num" id="LABEL_8">
							Sine Number
						</label>
						<input type="password" id="INPUT_9" name="sineNum" maxlength="4" />
					</li>
					<li id="LI_10">
						 
						<label for="agent-sine" id="LABEL_11">
							Agent Sine
						</label>
						<input type="text" id="INPUT_12" name="agentSine" maxlength="2" />
					</li>
					<li id="LI_13">
						 
						<label for="duty-code" id="LABEL_14">
							Duty Code
						</label>
						<input type="text" id="INPUT_15" name="dutyCode" maxlength="2" />
					</li>
					<li id="LI_16">
						 
						<label for="agent-aaa" id="LABEL_17">
							AAA
						</label>
						<input type="text" id="INPUT_18" name="aaa" maxlength="3" />
					</li>
					<li id="LI_19">
						<input type="button" value="Log In" id="INPUT_20" name="submit-search" />
					</li>
				</ul>
			</div>
		</form>
	</div>
</div>
  </div>
)

export default Login
