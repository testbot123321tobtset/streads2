/*
 * Geddy JavaScript Web development framework
 * Copyright 2112 Matthew Eernisse (mde@fleegix.org)
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *         http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
*/

var Main = function() {
    var me = this;
    me.index = function(req, resp, params) {
        var self = this, fs = require('fs');
        if (geddy.config.environment == 'production') {
            fs.readFile('./public/build/production/X/index.html', function(err, data) {
                if (err) {
                    throw err;
                }
                self.output(200, {
                    'Content-Type': 'text/html'
                }, data.toString());
            });
        }
        else {
            fs.readFile('./public/index.html', function(err, data) {
                if (err) {
                    throw err;
                }
                self.output(200, {
                    'Content-Type': 'text/html'
                }, data.toString());
            });
        }
    };
};

exports.Main = Main;