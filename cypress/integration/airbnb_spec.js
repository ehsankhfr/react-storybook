const iget = (doc, selector)=> cy.wrap(doc.find(selector));

describe('Storybook', () => {
    beforeEach(() => {
        cy.visit('http://airbnb.io/react-dates/')
    })
    context('DateRangePicker', () => {
        it('should visit the default story in this collection', () => {
        	cy.get('a[data-name="default"]').click();

        	cy.get('#storybook-preview-iframe').then(($iframe) => {
            	const doc = $iframe.contents();
            
            	iget(doc, "#startDate").click();
            	iget(doc, "#root > div > div:nth-child(2) > div > button").should('have.text', "Show Info");
            });
        });
    });

    describe("DayPicker", () => {
        beforeEach(() => {
            cy.get('div[data-name="DayPicker"]').click();
        })
        it('should visit the vertical day picker', () => {
            cy.get('a[data-name="vertical"]').click();
            cy.get('#storybook-preview-iframe').then(($iframe) => {
                const doc = $iframe.contents();

                iget(doc, 'div[aria-label="Calendar"]');
            })
        })
    });

});