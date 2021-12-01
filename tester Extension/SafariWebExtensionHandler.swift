//
//  SafariWebExtensionHandler.swift
//  tester Extension
//
//  Created by Łukasz Stachnik on 30/11/2021.
//

import SafariServices
import os.log

class SafariWebExtensionHandler: NSObject, NSExtensionRequestHandling {

    func beginRequest(with context: NSExtensionContext) {
        let item = context.inputItems[0] as! NSExtensionItem
        let message = item.userInfo?[SFExtensionMessageKey]
        os_log(.default, "Received message from browser.runtime.sendNativeMessage: %@", message as! CVarArg)

        let response = NSExtensionItem()
        response.userInfo = [ SFExtensionMessageKey: [ "answer": "general kenobi" ] ]

        context.completeRequest(returningItems: [response], completionHandler: nil)
    }

}
