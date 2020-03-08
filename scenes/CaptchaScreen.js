import React from 'react';
import { Container } from './Main/styles';
import WebView from 'react-native-webview';
import { View, KeyboardAvoidingView, Platform, Text, StyleSheet, TouchableOpacity } from 'react-native';

// import { Container } from './styles';

export default function CaptchaScreen({ navigation }) {




    getWebviewContent = () => {
        var originalForm = '<!DOCTYPE html><html><head><script src="https://www.google.com/recaptcha/api.js"></script></head><body><form action="[POST_URL]" method="post"><input type="hidden" value="[TITLE]"><input type="hidden" value="[DESCRIPTION]"><input type="hidden" value="[URL]"><div class="g-recaptcha" data-sitekey="<My key>"></div><input type="submit" value="Send"/></form></body></html>'
        var tmp = originalForm
            .replace("[POST_URL]", "http://localhost:3000/v1/video")
            .replace("[TITLE]", "Captcha")
            .replace("[DESCRIPTION]", "aaaa")
            .replace("[URL]", "http://your-domain.com");

        return tmp;
    }



    return (
        <Container>
            <TouchableOpacity onPress={() => navigation.navigate('Main')}>
                <Text>Voltar</Text>
            </TouchableOpacity>

            <WebView
                    javaScriptEnabled={true}
                    mixedContentMode={'always'}
                    source={{
                        html: this.getWebviewContent(),
                        baseUrl: 'http://your-domain.com'
                    }} />
        </Container>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});


